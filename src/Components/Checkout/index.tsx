import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button/'

import * as S from './styles'

import { RootReducer } from '../../store'
import {
    SidebarType,
    changeSidebar,
    clear,
    close,
} from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import { formataPreco, getTotalPrice } from '../../Utils'

enum CheckoutType {
    ADDRESS = 'address',
    PAYMENT = 'payment',
}

type PageCheckoutProps = {
    page: CheckoutType
}

const Checkout = () => {
    const [pageCheckout, setPageCheckout] = useState<PageCheckoutProps>({
        page: CheckoutType.ADDRESS,
    })
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [purchase, { data, isSuccess }] = usePurchaseMutation()
    const dispatch = useDispatch()

    function parseValue(value: string): string {
        return value.replace(/\D/g, '')
    }

    const form = useFormik({
        initialValues: {
            receiver: '',
            address: '',
            city: '',
            zipCode: '',
            numberAddress: '',
            complement: '',
            cardName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: '',
        },
        validationSchema: Yup.object({
            receiver: Yup.string()
                .required('O campo do nome do destinatário é obrigatório')
                .min(5, 'O nome deve ter pelo menos 5 letras'),
            address: Yup.string()
                .required('O campo do endereço é obrigatório')
                .min(10, 'O endereço deve ter pelo menos 10 letras'),
            city: Yup.string()
                .required('O campo da cidade é obrigatório')
                .min(5, 'O nome da cidade deve ter pelo menos 5 letras'),
            zipCode: Yup.string()
                .transform((value) => parseValue(value))
                .length(8, 'O CEP deve ter exatamente 8 dígitos')
                .required('O campo do CEP é obrigatório'),
            numberAddress: Yup.string().required('O campo do número é obrigatório'),
            complement: Yup.string(),
            cardName: Yup.string()
                .min(10, 'O nome no cartão deve ter pelo menos 10 letras')
                .required('O campo do nome do cartão é obrigatório'),
            cardNumber: Yup.string()
                .transform((value) => parseValue(value))
                .length(16, 'O número do cartão deve ter exatamente 16 dígitos')
                .required('O campo do número do cartão é obrigatório'),
            cardCode: Yup.string()
                .length(3, 'O CVV deve ter exatamente 3 dígitos')
                .required('O campo do CVV é obrigatório'),
            expiresYear: Yup.string()
                .transform((value) => parseValue(value))
                .length(2, 'O mês de expiração deve ter exatamente 2 dígitos')
                .required('O campo do ano de expiração é obrigatório'),
            expiresMonth: Yup.string()
                .transform((value) => parseValue(value))
                .length(2, 'O ano de expiração deve ter exatamente 2 dígitos')
                .required('O campo do mês de expiração é obrigatório'),
        }),
        onSubmit: (values) => {
            console.log('Submitting form', values)
            purchase({
                products: items.map((item) => ({
                    id: item.item.id,
                    price: item.item.preco,
                })),
                delivery: {
                    receiver: values.receiver,
                    address: {
                        description: values.address,
                        city: values.city,
                        zipCode: values.zipCode,
                        number: Number(values.numberAddress),
                        complement: values.complement,
                    },
                },
                payment: {
                    card: {
                        name: values.cardName,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear),
                        },
                    },
                },
            })
        },
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isValid = fieldName in form.errors
        const hasError = isTouched && isValid

        return hasError
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
            setPageCheckout({ page: CheckoutType.ADDRESS })
        }
    }, [isSuccess, dispatch])

    const concluir = () => {
        setPageCheckout({ page: CheckoutType.ADDRESS })
        dispatch(changeSidebar(SidebarType.CART))
        dispatch(close())
    }

    return (
        <div>
            <>
                {isSuccess ? (
                    <S.SuccessDiv>
                        <S.CheckoutTitle>
                            Pedido realizado - {data?.orderId}
                        </S.CheckoutTitle>
                        <p>
                            Estamos felizes em informar que seu pedido já está
                            em processo de preparação e, em breve, será entregue
                            no endereço fornecido.
                        </p>
                        <p className="margin-top-checkout">
                            Gostaríamos de ressaltar que nossos entregadores não
                            estão autorizados a realizar cobranças extras.
                        </p>
                        <p className="margin-top-checkout">
                            Lembre-se da importância de higienizar as mãos após
                            o recebimento do pedido, garantindo assim sua
                            segurança e bem-estar durante a refeição.
                        </p>
                        <p className="margin-top-checkout">
                            Esperamos que desfrute de uma deliciosa e agradável
                            experiência gastronômica. Bom apetite!
                        </p>
                        <Button
                            type="button"
                            title="Concluir"
                            onClick={concluir}
                            margintop="24px"
                        >
                            Concluir
                        </Button>
                    </S.SuccessDiv>
                ) : (
                    <form onSubmit={form.handleSubmit}>
                        {pageCheckout.page === CheckoutType.ADDRESS && (
                            <>
                                <S.CheckoutTitle>Entrega</S.CheckoutTitle>
                                <S.InputGroup>
                                    <label htmlFor="recipient">
                                        Quem irá receber
                                    </label>
                                    <input
                                        id="recipient"
                                        name="receiver"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.receiver}
                                        type="text"
                                        className={
                                            checkInputHasError('receiver')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                    {form.errors.receiver &&
                                        form.touched.receiver && (
                                            <div className="error-message">
                                                {form.errors.receiver}
                                            </div>
                                        )}
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="address">Endereço</label>
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.address}
                                        className={
                                            checkInputHasError('address')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                    {form.errors.address &&
                                        form.touched.address && (
                                            <div className="error-message">
                                                {form.errors.address}
                                            </div>
                                        )}
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="city">Cidade</label>
                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.city}
                                        className={
                                            checkInputHasError('city')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                    {form.errors.city && form.touched.city && (
                                        <div className="error-message">
                                            {form.errors.city}
                                        </div>
                                    )}
                                </S.InputGroup>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="zipcode">CEP</label>
                                        <InputMask
                                            mask="99999-999"
                                            id="zipCode"
                                            type="text"
                                            name="zipCode"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.zipCode}
                                            className={
                                                checkInputHasError('zipCode')
                                                    ? 'error'
                                                    : ''
                                            }
                                        />
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="number">Número</label>
                                        <input
                                            id="number"
                                            type="text"
                                            name="numberAddress"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.numberAddress}
                                            className={
                                                checkInputHasError(
                                                    'numberAddress'
                                                )
                                                    ? 'error'
                                                    : ''
                                            }
                                        />
                                    </S.InputGroup>
                                </S.Row>
                                <S.Row>
                                    {form.errors.zipCode &&
                                        form.touched.zipCode && (
                                            <S.InputGroup>
                                                <div className="error-message">
                                                    {form.errors.zipCode}
                                                </div>
                                            </S.InputGroup>
                                        )}
                                    {form.errors.numberAddress &&
                                        form.touched.numberAddress && (
                                            <S.InputGroup>
                                                <div className="error-message align-end">
                                                    {form.errors.numberAddress}
                                                </div>
                                            </S.InputGroup>
                                        )}
                                </S.Row>
                                <S.InputGroup>
                                    <label htmlFor="complement">
                                        Complemento(opcional)
                                    </label>
                                    <input
                                        id="complement"
                                        type="text"
                                        name="complement"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.complement}
                                        className={
                                            checkInputHasError('complement')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                                <Button
                                    type="button"
                                    title="Saiba mais"
                                    margintop="24px"
                                    onClick={() => {
                                        const requiredFields: (keyof typeof form.initialValues)[] =
                                            [
                                                'receiver',
                                                'address',
                                                'city',
                                                'zipCode',
                                                'numberAddress',
                                            ]
                                        const areRequiredFieldsValid =
                                            requiredFields.every(
                                                (field) =>
                                                    form.values[field] !== '' &&
                                                    !checkInputHasError(field)
                                            )

                                        if (areRequiredFieldsValid) {
                                            setPageCheckout({
                                                page: CheckoutType.PAYMENT,
                                            })
                                        } else {
                                            return
                                        }
                                    }}
                                >
                                    Continuar com o pagamento
                                </Button>
                                <Button
                                    type="button"
                                    title="Saiba mais"
                                    margintop="8px"
                                    onClick={() =>
                                        dispatch(
                                            changeSidebar(SidebarType.CART)
                                        )
                                    }
                                >
                                    Voltar para o carrinho
                                </Button>
                            </>
                        )}
                        {pageCheckout.page === CheckoutType.PAYMENT && (
                            <>
                                <S.CheckoutTitle>
                                    Pagamento - Valor a pagar{' '}
                                    {formataPreco(getTotalPrice(items))}
                                </S.CheckoutTitle>
                                <S.InputGroup>
                                    <label htmlFor="card-name">
                                        Nome no cartão
                                    </label>
                                    <input
                                        id="card-name"
                                        type="text"
                                        name="cardName"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.cardName}
                                        className={
                                            checkInputHasError('cardName')
                                                ? 'error'
                                                : ''
                                        }
                                    />
                                </S.InputGroup>
                                {form.errors.cardName &&
                                    form.touched.cardName && (
                                        <S.InputGroup>
                                            <div className="error-message">
                                                {form.errors.cardName}
                                            </div>
                                        </S.InputGroup>
                                    )}
                                <S.Row>
                                    <S.InputGroup maxwidth="228px">
                                        <label htmlFor="card-number">
                                            Número do cartão
                                        </label>
                                        <InputMask
                                            mask="9999 9999 9999 9999"
                                            id="card-number"
                                            type="text"
                                            name="cardNumber"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.cardNumber}
                                            className={
                                                checkInputHasError('cardNumber')
                                                    ? 'error'
                                                    : ''
                                            }
                                        />
                                    </S.InputGroup>
                                    <S.InputGroup maxwidth="87px">
                                        <label htmlFor="cvv">CVV</label>
                                        <InputMask
                                            mask="999"
                                            id="cvv"
                                            type="text"
                                            name="cardCode"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.cardCode}
                                            className={
                                                checkInputHasError('cardCode')
                                                    ? 'error'
                                                    : ''
                                            }
                                        />
                                    </S.InputGroup>
                                </S.Row>
                                <S.Row>
                                    {form.errors.cardNumber &&
                                        form.touched.cardNumber && (
                                            <S.InputGroup>
                                                <div className="error-message">
                                                    {form.errors.cardNumber}
                                                </div>
                                            </S.InputGroup>
                                        )}
                                    {form.errors.cardCode &&
                                        form.touched.cardCode && (
                                            <S.InputGroup>
                                                <div className="error-message align-end">
                                                    {form.errors.cardCode}
                                                </div>
                                            </S.InputGroup>
                                        )}
                                </S.Row>
                                <S.Row>
                                    <S.InputGroup>
                                        <label htmlFor="expires-month">
                                            Mês do vencimento
                                        </label>
                                        <InputMask
                                            mask="99"
                                            id="expires-month"
                                            type="text"
                                            name="expiresMonth"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.expiresMonth}
                                            className={
                                                checkInputHasError(
                                                    'expiresMonth'
                                                )
                                                    ? 'error'
                                                    : ''
                                            }
                                        />
                                    </S.InputGroup>
                                    <S.InputGroup>
                                        <label htmlFor="expires-year">
                                            Ano do vencimento
                                        </label>
                                        <InputMask
                                            mask="99"
                                            id="expires-year"
                                            type="text"
                                            name="expiresYear"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.expiresYear}
                                            className={
                                                checkInputHasError(
                                                    'expiresYear'
                                                )
                                                    ? 'error'
                                                    : ''
                                            }
                                        />
                                    </S.InputGroup>
                                </S.Row>
                                <S.Row>
                                    {form.errors.expiresMonth &&
                                        form.touched.expiresMonth && (
                                            <S.InputGroup>
                                                <div className="error-message">
                                                    {form.errors.expiresMonth}
                                                </div>
                                            </S.InputGroup>
                                        )}
                                    {form.errors.expiresYear &&
                                        form.touched.expiresYear && (
                                            <S.InputGroup>
                                                <div className="error-message align-end">
                                                    {form.errors.expiresYear}
                                                </div>
                                            </S.InputGroup>
                                        )}
                                </S.Row>
                                <Button
                                    type="submit"
                                    title="Clique aqui para finalizar a compra"
                                >
                                    Finalizar pagamento
                                </Button>
                                <Button
                                    type="button"
                                    title="Saiba mais"
                                    onClick={() =>
                                        setPageCheckout({
                                            page: CheckoutType.ADDRESS,
                                        })
                                    }
                                    margintop="8px"
                                >
                                    Voltar para a edição de endereço
                                </Button>
                            </>
                        )}
                    </form>
                )}
            </>
        </div>
    )
}

export default Checkout

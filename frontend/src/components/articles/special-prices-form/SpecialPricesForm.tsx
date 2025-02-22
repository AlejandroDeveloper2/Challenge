/* eslint-disable react-hooks/exhaustive-deps */
import { JSX, useEffect } from "react";
import {
  IoAddOutline,
  IoCalculator,
  IoClose,
  IoPersonOutline,
} from "react-icons/io5";
import { FaPercentage } from "react-icons/fa";
import { BiBox, BiEdit } from "react-icons/bi";

import { Product, SpecialPriceForm, User, WrongInput } from "@interfaces/index";

import {
  useForm,
  useLoading,
  useMultiSelect,
  useProductStore,
  useSelect,
  useSpecialPriceStore,
  useUserStore,
} from "@hooks/index";

import { validationSchema } from "./ValidationSchema";

import { Form } from "@components/index";
import calculateDiscount from "@utils/calculateDiscount";

interface Props {
  mode: "edit" | "save";
  toggleModal: () => void;
}

const initialValues: SpecialPriceForm = {
  product: null,
  users: [],
  discount: "0",
  finalPrice: 0,
};

const initialErrors: WrongInput<SpecialPriceForm> = {
  discount: {
    error: false,
    message: "",
  },
  finalPrice: {
    error: false,
    message: "",
  },
  product: {
    error: false,
    message: "",
  },
  users: {
    error: false,
    message: "",
  },
};

const SpecialPricesForm = ({ toggleModal, mode }: Props): JSX.Element => {
  const { specialPrice, createProductWithDiscount, editProductWithDiscount } =
    useSpecialPriceStore();
  const { products } = useProductStore();
  const { users } = useUserStore();

  const { isLoading, toggleLoading } = useLoading();

  const {
    formRef,
    errors,
    data,
    handleChange,
    handleSubmit,
    updateFormData,
    clearForm,
    clearInputText,
    updateInitialValues,
  } = useForm<SpecialPriceForm>(
    initialValues,
    initialErrors,
    validationSchema,
    () => {
      if (mode === "save") createProductWithDiscount(data, toggleLoading);
      else if (specialPrice && mode === "edit")
        editProductWithDiscount(
          specialPrice.specialPriceId,
          data,
          toggleLoading
        );
      toggleModal();
    }
  );

  const {
    selectedOption,
    isOptionsTriggered,
    onTriggerSelectOptions,
    onSelectOption,
    onResetSelection,
    updateInitialOption,
  } = useSelect<Product>();

  const multiSelect = useMultiSelect<User>();

  useEffect(() => {
    updateFormData<SpecialPriceForm>(selectedOption, "product");
  }, [selectedOption]);

  useEffect(() => {
    updateFormData<SpecialPriceForm>(multiSelect.selectedOptions, "users");
  }, [multiSelect.selectedOptions]);

  useEffect(() => {
    if (data.product)
      updateFormData<SpecialPriceForm>(
        calculateDiscount(parseInt(data.discount), data.product.price),
        "finalPrice"
      );
  }, [data.discount, data.product]);

  useEffect(() => {
    if (specialPrice && mode === "edit") {
      updateInitialValues({
        discount: specialPrice.discount.toString(),
        finalPrice: calculateDiscount(
          specialPrice.discount,
          specialPrice.product.price
        ),
        users: specialPrice.users,
        product: specialPrice.product,
      });
      updateInitialOption(specialPrice.product);
      multiSelect.updateInitialOptions(specialPrice.users);
    }
  }, [specialPrice, mode]);

  return (
    <Form onSubmit={handleSubmit} formRef={formRef}>
      <Form.Fields>
        <Form.Select<Product>
          id="product"
          placeholder="Selecciona un producto"
          options={products}
          selectedOption={selectedOption}
          showKey="name"
          isOptionsTriggered={isOptionsTriggered}
          onTriggerSelectOptions={onTriggerSelectOptions}
          onSelectOption={onSelectOption}
          onResetSelection={onResetSelection}
          errorMessage={errors.product.message}
          style={{
            unit: "%",
            width: 100,
          }}
          Icon={BiBox}
        />
        <Form.MultiSelect<User>
          id="users"
          Icon={IoPersonOutline}
          placeholder="Selecciona uno o más usuarios"
          style={{ unit: "%", width: 100 }}
          options={users}
          selectedOptions={multiSelect.selectedOptions}
          showKey="name"
          idKey="userId"
          isOptionsTriggered={multiSelect.isOptionsTriggered}
          onTriggerSelectOptions={multiSelect.onTriggerSelectOptions}
          onSelectOption={multiSelect.onSelectOption}
          onResetSelections={multiSelect.onResetSelections}
          onRemoveSelection={multiSelect.onRemoveSelection}
        />
        <Form.InputText
          Icon={FaPercentage}
          id="discount"
          name="discount"
          type="number"
          placeholder="Porcentaje de descuento"
          value={data.discount}
          errorMessage={errors.discount.message}
          style={{ unit: "%", width: 100 }}
          onChange={handleChange}
          onClearInput={() => {
            clearInputText("discount", "number");
          }}
        />
        <Form.InputText
          Icon={IoCalculator}
          id="finalPrice"
          name="finalPrice"
          type="number"
          placeholder="Precio final con descuento"
          value={data.finalPrice}
          errorMessage={errors.finalPrice.message}
          style={{ unit: "%", width: 100 }}
          onChange={handleChange}
          disabled
          onClearInput={() => {
            clearInputText("finalPrice", "number");
          }}
        />
      </Form.Fields>

      <Form.Controls>
        <Form.Button
          label={mode === "save" ? "Agregar" : "Editar"}
          id="btn-save-special-price"
          Icon={mode === "save" ? IoAddOutline : BiEdit}
          style={{
            unit: "%",
            width: 100,
          }}
          onClick={() => {}}
          title={
            mode === "save"
              ? "Agregar nuevo precio especial"
              : "Editar precio especial"
          }
          type="submit"
          variant={"primary"}
          loading={isLoading}
        />
        <Form.Button
          label="Cancelar"
          id="btn-clear-form"
          Icon={IoClose}
          style={{
            unit: "%",
            width: 100,
          }}
          onClick={() => {
            clearForm();
            toggleModal();
          }}
          title="Cancelar operación"
          type="button"
          variant="default"
        />
      </Form.Controls>
    </Form>
  );
};

export default SpecialPricesForm;

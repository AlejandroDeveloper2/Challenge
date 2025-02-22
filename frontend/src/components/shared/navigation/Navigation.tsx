import { JSX, useEffect, lazy, Suspense } from "react";
import { IoAddOutline, IoPersonOutline } from "react-icons/io5";

import { User } from "@interfaces/index";

import {
  useAppStore,
  useLoading,
  useModal,
  useSelect,
  useUserStore,
} from "@hooks/index";

import {
  IconOnlyButton,
  SelectInput,
  Logo,
  SpecialPricesForm,
} from "@components/index";

import { Nav } from "./Navigation.style";

const Modal = lazy(() => import("@components/shared/modal/Modal"));
const FormModal = lazy(() => import("@components/shared/modal/Modal"));

const Navigation = (): JSX.Element => {
  const { updateUserState } = useAppStore();
  const { users, findAllUsers } = useUserStore();

  const { toggleLoading } = useLoading();

  const {
    isOptionsTriggered,
    selectedOption,
    onSelectOption,
    onTriggerSelectOptions,
    onResetSelection,
  } = useSelect<User>();

  const { isModalVisible, toggleModal } = useModal();
  const { isModalVisible: isFormModalVisible, toggleModal: toggleFormModal } =
    useModal();

  useEffect(() => {
    if (users.length > 0) return;
    findAllUsers(toggleLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.length]);

  useEffect(() => {
    updateUserState(selectedOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  return (
    <>
      <Suspense fallback={<p>Cargando modal..</p>}>
        {isFormModalVisible && (
          <FormModal
            title="Agregar precios especiales"
            isModalVisible={isFormModalVisible}
            toggleModal={toggleFormModal}
          >
            <SpecialPricesForm mode="save" toggleModal={toggleFormModal} />
          </FormModal>
        )}
      </Suspense>
      <Suspense fallback={<p>Cargando modal..</p>}>
        {isModalVisible && (
          <Modal
            title="Filtrar precios especiales"
            isModalVisible={isModalVisible}
            height={400}
            toggleModal={toggleModal}
          >
            <SelectInput<User>
              id="select-user"
              placeholder="Selecciona un usuario"
              options={users}
              selectedOption={selectedOption}
              showKey="name"
              isOptionsTriggered={isOptionsTriggered}
              onTriggerSelectOptions={onTriggerSelectOptions}
              onSelectOption={onSelectOption}
              onResetSelection={onResetSelection}
              style={{
                unit: "px",
                width: 300,
              }}
              Icon={IoPersonOutline}
            />
          </Modal>
        )}
      </Suspense>
      <Nav>
        {/** Logotipo app */}
        <Logo />
        <menu>
          {/** Input select para filtrar por usuario */}
          <SelectInput<User>
            id="select-user"
            placeholder="Selecciona un usuario"
            options={users}
            selectedOption={selectedOption}
            showKey="name"
            isOptionsTriggered={isOptionsTriggered}
            onTriggerSelectOptions={onTriggerSelectOptions}
            onSelectOption={onSelectOption}
            onResetSelection={onResetSelection}
            style={{
              unit: "px",
              width: 300,
            }}
            Icon={IoPersonOutline}
          />
          <IconOnlyButton
            id="btn-filter-by-user"
            Icon={IoPersonOutline}
            style={{
              unit: "px",
              width: "auto",
            }}
            title="Filtrar precio especial por usuario"
            onClick={toggleModal}
            type="button"
            variant="default"
          />
          {/** Boton para agregar nuevo precio especial */}
          <IconOnlyButton
            id="btn-add-special-price"
            Icon={IoAddOutline}
            style={{
              unit: "px",
              width: "auto",
            }}
            title="Agregar nuevo precio especial"
            onClick={toggleFormModal}
            type="button"
            variant="primary"
          />
        </menu>
      </Nav>
    </>
  );
};

export default Navigation;

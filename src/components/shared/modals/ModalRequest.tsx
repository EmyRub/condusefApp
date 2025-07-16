import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import ListRequest from "../ListRequest";
import { DocumentArrowUpIcon } from '@heroicons/react/16/solid';
import { useState } from "react";


export default function ModalRequest() {
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <>

            <DocumentArrowUpIcon
                onClick={() => setToggleModal(true)}
                className="w-12 h-12 fixed top-1/3 right-[5%] text-white cursor-pointer"
            />

            <Transition appear show={toggleModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setToggleModal(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#00000096] " />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[70%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <ListRequest />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

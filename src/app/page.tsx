// 'use client'
// import {useState} from "react";
// import {
//     Modal,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalFooter,
//     Button,
//     useDisclosure,
//     Checkbox,
//     Input,
//     Link
// } from "@nextui-org/react";
// import {MailIcon} from "@/components/icons/MailIcon";
// import {LockIcon} from "@/components/icons/LockIcon";
// import {Card, CardBody} from "@nextui-org/react";
// import {Separator} from "@/components/ui/separator"
// import {BsFacebook, BsGoogle} from "react-icons/bs";
//
//
// export default function Page() {
//     const [a, setA] = useState(false)
//     const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
//
//     async function aa() {
//         console.log("A")
//         setA(true)
//         await sleep(1000);
//         setA(false)
//     }
//
//     return (
//         <div className="flex h-screen px-3 md:px-0 items-center justify-center">
//             <Card className=" sm:w-2/3 md:w-1/2 lg:w-4/12 w-full">
//                 <CardBody className="w-full gap-3 p-10">
//                     <Input
//                         autoFocus
//                         endContent={
//                             <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
//                         }
//                         label="Email"
//                         placeholder="Enter your email"
//                         variant="bordered"
//                     />
//                     <Input
//                         endContent={
//                             <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
//                         }
//                         label="Password"
//                         placeholder="Enter your password"
//                         type="password"
//                         variant="bordered"
//                     />
//                     <div className="flex flex-col sm:flex-row py-2 px-1 gap-2 sm:gap-0 justify-between items-center">
//                         <Checkbox
//                             classNames={{
//                                 label: "text-small",
//                             }}
//                         >
//                             Remember me
//                         </Checkbox>
//                         <Link color="primary" href="#" size="sm">
//                             Forgot password?
//                         </Link>
//
//                     </div>
//                     <div className="flex py-2 px-1 justify-center">
//                         <Button className="w-full" radius="full" color="primary" variant="ghost" isLoading={a}
//                                 onClick={aa}>{!a ? "Log in" : "Logging you in"}</Button>
//                     </div>
//                     <div className="flex flex-row w-full gap-2 justify-center items-center text-center">
//                         <Separator className="w-[47%]"/>
//                         <p className="w-[6%] text-xs">or</p>
//                         <Separator className="w-[47%]"/>
//                     </div>
//                     <div className="flex flex-col gap-2 py-2 px-1">
//                         <Button className="w-full flex" radius="full" color="primary" variant="ghost">
//                             <BsGoogle className="flex-none"/>
//                             <p className="flex-auto w-[90%]">Sign In With Google</p>
//                         </Button>
//                         <Button className="w-full" radius="full" color="primary" variant="ghost">
//                             <BsFacebook className="flex-none"/>
//                             <p className="flex-auto w-[90%]">Sign In With Facebook</p>
//                         </Button>
//                     </div>
//                 </CardBody>
//             </Card>
//
//
//         </div>
//     )
// }
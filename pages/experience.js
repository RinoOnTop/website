import { motion } from "framer-motion";
import Layout from "../layout/layout";

export default function experience() {
    return (
        <Layout title="Experience">

            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <div className="text-center">
                                <h1 className="md:text-6xl text-3xl font-bold">
                                    <span className="text-rose-500"> Experience </span>
                                </h1>
                                <p className="text-gray-200 italic text-lg">Well...., yeah ⚆ _ ⚆</p>
                            </div>
                            <div class="md:container md:mx-auto">
                                <div class="container mx-auto w-full grid gap-10 grid-cols-1 md:grid-cols-1  md:p-16 p-6">
                                    <div className="flex-grow space-y-2">
                                        <h1 className="text-3xl font-bold">Full Time : L2 Game support Specialist</h1>
                                        <h3 className="text-3x1 font-bold pt-1 md:mx-center text-center	">@UltaHost </h3>
                                        <ul className="text-gray-400 py- text-justify">
                                            <li></li>
                                        </ul>
                                        <div className="flex space-x-2">

                                        </div>
                                    </div>




                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >
        </Layout >
    )
}

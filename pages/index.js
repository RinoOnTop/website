import { motion } from "framer-motion";
import Layout from "../layout/layout";

export default function Home() {
  return (
    <Layout>
        <div className="flex flex-grow items-center">
            <div className="w-full">
                <div className="container flex mx-auto justify-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                        <h1 className="md:text-6xl text-3xl font-bold">
                          Hi there, I'm <span className="text-rose-500 hover:text-sky-500">Ahmed B.</span>
                        </h1>

                        <div className="text-right ">
                            <h1 className="md:text-6x1 ">
                             Aka <span className="text-yellow-500 hover:text-rose-400">Rino</span>
                            </h1>
                        </div>



                        <p className="text-gray-200 text-lg font-medium">
                            Sysadmin & Tech enthusiast
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

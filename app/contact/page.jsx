"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import info from "@/constant/info";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import schema from "@/schema/validationSchema";
import inputs from "@/constant/input";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                You can send me a message about your position, and I will get
                back to you after reviewing it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inputs.map((input, index) => (
                  <TextInput
                    key={index}
                    name={input.name}
                    register={register}
                    errors={errors}
                    placeholder={input.placeholder}
                  />
                ))}
              </div>
              <TextArea
                name="message"
                register={register}
                errors={errors}
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-[160px]" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

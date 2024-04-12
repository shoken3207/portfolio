"use client";
import React, { useState } from "react";
import Input from "./Input";
import InputArea from "./InputArea";
import { init, send } from "emailjs-com";

const Form = ({ id }: { id: string }) => {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const sendMail = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name || !email || !message) return;
    const userId = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;

    if (!!userId && !!serviceId && !!templateId) {
      init(userId);
      const template_param = {
        user_name: name,
        user_email: email,
        message,
      };

      send(serviceId, templateId, template_param).then(() => {
        window.alert(
          `下記の内容で送信いたしました。\n\n名前: ${name}\nemail: ${email}\nmessage: ${message}`
        );
        handleClear();
      });
    }
  };

  const handleClear = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation();
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div
      id={id}
      className="text-gray-600 flex items-center justify-center w-full h-screen bg-gradient-to-r from-blue-200 to-cyan-200"
    >
      <div className="flex flex-col gap-y-8 w-[90%] max-w-xl mx-auto">
        <h2 className="font-bold text-3xl text-center">お問い合わせ</h2>
        <p className="text-[15px]">
          このサイトについて質問や疑問点がありましたら、下記フォームをご利用ください。
        </p>
        <form onSubmit={(e) => sendMail(e)} className="flex flex-col gap-y-4">
          <InputArea label="名前" id="name">
            <Input
              id="name"
              placeholder="名前を入力"
              handleChange={handleChange}
              required={true}
              value={form.name}
            />
          </InputArea>
          <InputArea label="メールアドレス" id="email">
            <Input
              placeholder="メールアドレスを入力"
              id="email"
              type="email"
              value={form.email}
              required={true}
              handleChange={handleChange}
            />
          </InputArea>
          <InputArea id="message" label="問い合わせ内容">
            <textarea
              id="message"
              className=" px-4 py-2 border-none w-full rounded-[10px] outline-none"
              placeholder="お問い合わせ内容を入力してください"
              onChange={(e) => handleChange(e)}
              value={form.message}
              cols={30}
              rows={10}
            ></textarea>
          </InputArea>
          <div className="flex items-center justify-center gap-x-8">
            <button
              className=" min-w-20 px-4 py-2 rounded-[10px] bg-red-500 text-white"
              onClick={(e) => handleClear(e)}
            >
              リセット
            </button>
            <button
              type="submit"
              className=" min-w-20 px-4 py-2 rounded-[10px] bg-sky-500 text-white"
              onClick={(e) => sendMail(e)}
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

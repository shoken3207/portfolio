"use client";
import { init, send } from "emailjs-com";
import React, { useState } from "react";
import Input from "./Input";
import InputArea from "./InputArea";

const Form = () => {
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const sendMail = async (
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
      setIsSending(true);
      try {
        init(userId);
        const template_param = {
          user_name: name,
          user_email: email,
          message,
        };

        await send(serviceId, templateId, template_param);
        alert(
          `下記の内容で送信いたしました。\n\n名前: ${name}\nemail: ${email}\nmessage: ${message}`
        );
        handleClear();
      } catch (err) {
        console.log("err: ", err);
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleClear = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault();
    e?.stopPropagation();
    setForm({ name: "", email: "", message: "" });
  };
  const submitButtonClass = `
    flex justify-center items-center gap-x-1 min-w-20 px-4 py-2 rounded-[10px] text-[18px] bg-sky-500 text-white
    ${
      !form.email || !form.name || !form.message || isSending
        ? "opacity-20 pointer-events-none"
        : ""
    }
  `;
  const resetButtonClass =
    !form.name && !form.email && !form.message
      ? "opacity-20 pointer-events-none"
      : "";
  return (
    <div className="flex flex-col gap-y-8 text-gray-600">
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
            type="button"
            className={`flex justify-center items-center gap-x-1 min-w-20 px-2 py-2 text-[18px] rounded-[10px] bg-red-500 text-white ${resetButtonClass}`}
            onClick={(e) => handleClear(e)}
          >
            <img className="w-6" src="/icons/reset-svgrepo-com.svg" alt="" />
            リセット
          </button>
          <button type="submit" className={submitButtonClass}>
            {isSending ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <img
                className="w-6"
                src="/icons/send-alt-1-svgrepo-com.svg"
                alt=""
              />
            )}
            {isSending ? "送信中..." : "送信"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

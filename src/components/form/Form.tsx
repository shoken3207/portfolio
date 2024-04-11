// import React, { useState } from 'react';
// import styled from 'styled-components';
// import SendIcon from '@mui/icons-material/Send';
// import ClearIcon from '@mui/icons-material/Clear';
// import { Button } from '@mui/material';
// import { init, send } from 'emailjs-com';

// const Form = ({ id }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleChange = (e, setFunc) => {
//     e.preventDefault();
//     setFunc(e.target.value);
//   };

//   const sendMail = (e) => {
//     e.preventDefault();
//     if (!name || !email || !message) return;
//     const userId = process.env.REACT_APP_USER_ID;
//     const serviceId = process.env.REACT_APP_SERVICE_ID;
//     const templateId = process.env.REACT_APP_TEMPLATE_ID;

//     if (!!userId && !!serviceId && !!templateId) {
//       init(userId);
//       const template_param = {
//         user_name: name,
//         user_email: email,
//         message,
//       };

//       send(serviceId, templateId, template_param).then(() => {
//         window.alert(
//           `下記の内容で送信いたしました。\n\n名前: ${name}\nemail: ${email}\nmessage: ${message}`
//         );
//         handleClear();
//       });
//     }
//   };

//   const handleClear = (e) => {
//     e?.preventDefault();
//     e?.stopPropagation();
//     setName('');
//     setEmail('');
//     setMessage('');
//   };
//   return (
//     <SContainer id={id}>
//       <div></div>
//       <SContent>
//         <SSectionTitle>お問い合わせ</SSectionTitle>
//         <SSectionDesc>
//           このサイトについて質問や疑問点がありましたら、下記フォームをご利用ください。
//         </SSectionDesc>
//         <SForm onSubmit={(e) => sendMail(e)}>
//           <SInput
//             onChange={(e) => handleChange(e, setName)}
//             require
//             type='text'
//             placeholder='名前を入力'
//             value={name}
//           />
//           <SInput
//             onChange={(e) => handleChange(e, setEmail)}
//             require
//             type='email'
//             placeholder='メールアドレスを入力'
//             value={email}
//           />
//           <STextArea
//             onChange={(e) => handleChange(e, setMessage)}
//             placeholder='問い合わせ内容を入力'
//             require
//             type='text'
//             rows='8'
//             cols='30'
//             value={message}
//           />
//           <SButtonGroup>
//             <Button
//               onClick={(e) => handleClear(e)}
//               disabled={!name && !email && !message}
//               variant='contained'
//               color='error'
//               size='large'
//               startIcon={<ClearIcon />}
//             >
//               取り消す
//             </Button>
//             <Button
//               type='submit'
//               disabled={!name || !email || !message}
//               variant='contained'
//               color='primary'
//               size='large'
//               startIcon={<SendIcon />}
//             >
//               送信する
//             </Button>
//           </SButtonGroup>
//         </SForm>
//       </SContent>
//     </SContainer>
//   );
// };

// const SContainer = styled.div`
//   width: 100;
//   height: 100vh;
//   background-image: linear-gradient(
//     90deg,
//     rgba(253, 219, 146, 1),
//     rgba(209, 253, 254, 1)
//   );
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const SContent = styled.div`
//   width: 90%;
//   max-width: 550px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   row-gap: 2.2rem;
// `;

// const SSectionTitle = styled.h2`
//   width: 100%;
//   color: #424242;
//   text-align: center;
//   font-size: 1.4rem;
//   font-family: 'Shippori Mincho B1', serif;
//   font-weight: 550;
// `;

// const SSectionDesc = styled.p`
//   font-size: 0.9rem;
//   color: #403e3e;
// `;

// const SForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   row-gap: 1.7rem;
// `;

// const SInput = styled.input`
//   padding: 0.7rem;
//   width: 100%;
//   border: none;
//   outline: none;
//   border-radius: 10px;
// `;

// const STextArea = styled.textarea`
//   padding: 0.7rem;
//   font-size: 1rem;
//   width: 100%;
//   border: none;
//   outline: none;
//   border-radius: 10px;
// `;

// const SButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   column-gap: 1.5rem;
//   align-items: center;
// `;

// export default Form;

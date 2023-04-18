import Script from "next/script";
import Head from "next/head";
import { useEffect, useState } from "react";
let historyContext = [];
function HomePage() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const htmls = [
      {
        messageType: "raw",
        headIcon: "./img/chatgpt-icon.png",
        name: "chatgpt消息",
        position: "left",
        html: `请问有什么可以帮到您的吗？`,
      },
    ];
    beforeRenderingHTML(htmls, ".lite-chatbox");
  }, []);


  const chagChatgptAnswer = (text) => {
    const htmls = [
      {
        messageType: "raw",
        headIcon: "./img/chatgpt-icon.png",
        name: "chatgpt消息",
        position: "left",
        html: text,
      },
    ];
    beforeRenderingHTML(htmls, ".lite-chatbox");
  };

  const replyChatgpt = (text) => {
    const htmls = [
      {
        messageType: "raw",
        headIcon: "./img/self.png",
        name: "你",
        position: "right",
        html: text,
      },
    ];
    beforeRenderingHTML(htmls, ".lite-chatbox");
  };

  const clearInput = () => {
    const replyDom = document.querySelector("#reply");
    replyDom.innerHTML = "";
  };

  const sendHandle = () => {
    const replyDom = document.querySelector("#reply");
    setLoading(true);
    if (replyDom && window.fetch) {
      replyChatgpt(replyDom.innerText);
      fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          input: replyDom.innerText,
          context: historyContext,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          setLoading(false);
          chagChatgptAnswer(res.ouput);
          historyContext = res.context;
          clearInput();
        })
        .catch((err) => {
          setLoading(false);
          console.log("Request Failed", err);
        });
    }
  };

  return (
    <>
      <Head>
        <title>测试</title>
        <meta
          id="viewport"
          name="viewport"
          content="width=device-width; initial-scale=1.0; maximum-scale=1; user-scalable=no;"
        />
        <link
          type="text/css"
          href="./css/litewebchat.min.css"
          rel="stylesheet"
        />
        <link
          type="text/css"
          href="./css/litewebchat_input.min.css"
          rel="stylesheet"
        />
        <link type="text/css" href="./css/style.css" rel="stylesheet" />
        <script src="./js/litewebchat_input.min.js"></script>
        <script src="./js/litewebchat_render.min.js"></script>
      </Head>

      <div className="lite-chatmaster">
        <div className="lite-chatbox"></div>
        <div className="lite-chattools"></div>
        {isLoading && (
          <div className="loading-wrap">
            <div className="loading"></div>
          </div>
        )}
        <div className="lite-chatinput">
          <hr className="boundary" />
          <div
            aria-label="input area"
            className="editor chatinput"
            contentEditable="true"
            placeholder="请输入你的问题"
            id="reply"
          ></div>
          <button className="send" onClick={sendHandle}>
            发送
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;

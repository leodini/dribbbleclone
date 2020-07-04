import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import useMessage from "../../hooks/useMessage";
import "./styles.css";

const Message = () => {
  const { message } = useMessage();

  if (!message) return null;
  return (
    <>
      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <AiOutlineCheck style={{ color: "#fff" }} size={56} />
              </div>
            </div>
            <div class="modal-body text-center">
              <h4>{message.text}</h4>
              <p>You will be redirected to Home.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;

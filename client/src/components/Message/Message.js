import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import useMessage from "../../hooks/useMessage";
import "./styles.css";

const Message = () => {
  const { message } = useMessage();

  if (!message) return null;
  return (
    <>
      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header">
              <div className="icon-box">
                <AiOutlineCheck style={{ color: "#fff" }} size={56} />
              </div>
            </div>
            <div className="modal-body text-center">
              <h4>{message.text}</h4>
              <p>You will be redirected to the homepage.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;

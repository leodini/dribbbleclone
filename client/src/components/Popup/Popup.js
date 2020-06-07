import React, { useEffect } from "react";
import Modal from "react-modal";
import useFetch from "../../hooks/useFetch";

Modal.setAppElement("#yourAppElement");

const PopupModal = ({ postId, open }) => {
  const { data, isLoading } = useFetch(`/posts/${postId}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!data) return null;
  return (
    <Modal isOpen={open}>
      <div className="container">{postId}</div>
      <img src={data.image_url} alt={data.title} />
      <div className="desc">{data.description}</div>
    </Modal>
  );
};

export default PopupModal;

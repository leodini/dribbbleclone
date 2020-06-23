// import React from "react";
// import Modal from "react-modal";
// import useFetch from "../../hooks/useFetch";
// import { AuthorContainer, Close } from "./StyledModal";
// import default_user from "../../assets/default_user.png";
// import "./styles.css";

// Modal.setAppElement("#yourAppElement");

// const PopupModal = ({ postId, open, handleClose }) => {
//   const { data, isLoading } = useFetch(`/posts/${postId}`);

//   if (!data && isLoading) return null;
//   return (
//     // <Modal isOpen={open} className="Modal" overlayClassName="Overlay">
//     //   <Close onClick={handleClose}>X</Close>
//     //   <AuthorContainer>
//     //     {data.author.avatar_url ? (
//     //       <img src={data.author.avatar_url} alt={data.author.username} />
//     //     ) : (
//     //       <img src={default_user} alt={data.author.username} />
//     //     )}
//     //     <div>
//     //       <p className="title">{data.title}</p>
//     //       <p className="author">
//     //         <span>by</span> {data.author.username}
//     //       </p>
//     //     </div>
//     //   </AuthorContainer>
//     //   <img
//     //     src={data.image_url}
//     //     alt={data.title}
//     //     style={{ width: "760px", borderRadius: "8px" }}
//     //   />
//     //   <div className="desc">{data.description}</div>
//     // </Modal>
//     <div className="con"></div>
//   );
// };

// export default PopupModal;

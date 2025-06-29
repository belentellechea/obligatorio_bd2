import "./ListComponent.css";

export default function ListComponent({ imageUrl, title, onClick }) {
  return (
    <div className="listComponentContainer" onClick={onClick}>
      <div className="listImageContainer">
        <img src={imageUrl} className="listImage"></img>
      </div>
      <div className="titleContainer">
        <p className="listTitle"> {title} </p>
      </div>
    </div>
  );
}

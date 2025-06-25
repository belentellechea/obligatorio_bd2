import "./ListComponent.css";

export default function ListComponent({ imageUrl, title }) {
  return (
    <div className="listComponentContainer">
      <div className="listImageContainer">
        <img src={imageUrl} className="listImage"></img>
      </div>
      <div className="titleContainer">
        <p className="listTitle"> {title} </p>
      </div>
    </div>
  );
}

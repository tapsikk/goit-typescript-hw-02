import { Button } from "react-bootstrap";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <Button className="buttons" onClick={onClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
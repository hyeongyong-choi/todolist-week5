import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'components/elements/Button';

function Todo({ todo }) {
  // const { title, name, id } = todo;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {};

  return (
    <div>
      <TodoLists>
        <TodoInfoContainer onClick={() => navigate(`1`)}>
          <TodoListTitle>제목</TodoListTitle>
          <TodoListWriter>작성자: 이름</TodoListWriter>
        </TodoInfoContainer>
        <ButtonCotainer>
          <Button variant="delete" clickHandler={handleDelete} />
        </ButtonCotainer>
      </TodoLists>
    </div>
  );
}

export default Todo;

const TodoLists = styled.div`
  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const TodoInfoContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const TodoListTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const TodoListWriter = styled.p`
  font-size: 10px;
`;

const ButtonCotainer = styled.div`
  padding: 20px;
`;

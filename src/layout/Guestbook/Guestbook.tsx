import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading2>
        부담없이 전하고 싶은 메시지를 남겨주세요!
        <br />
        신랑 신부만 볼 수 있게 전달됩니다.
      </Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;

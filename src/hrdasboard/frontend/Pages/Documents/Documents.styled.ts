import styled from "styled-components";

export const DocumentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  top: 6rem;
  gap: 2rem;
`;
export const DocumentsTop = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 6px solid rgb(30 58 138);
  justify-content: center;
  padding: 1rem;
  color: grey;
`;

export const DocumentsBody = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SideBarTitle = styled.span<{ $bgColor: string; $color: string }>`
  background: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.3rem;
`;

export const DocumentsBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  position: relative;
  gap: 1rem;

  button {
    position: absolute;
    right: 0;
  }
`;

export const DocumentCardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  justify-content: flex-start;
  color: grey;

  & span:nth-child(1) {
    width: 20%;
  }
  & span:nth-child(2) {
    width: 50%;
    color: rgb(30 58 138);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  & span:nth-child(3) {
    width: 30%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  color: rgb(30 58 138);
  width: 15%;
  justify-content: flex-end;
  padding-right: 1rem;

  svg {
    cursor: pointer;
  }
`;

export const Headings = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 85%;
  gap: 1rem;
  color: rgb(30 58 138);

  & span:nth-child(1) {
    width: 20%;
  }
  & span:nth-child(2) {
    width: 50%;
  }
  & span:nth-child(3) {
    width: 30%;
  }
`;

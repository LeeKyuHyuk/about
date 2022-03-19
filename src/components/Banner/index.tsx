import styled from 'styled-components';
import ChatBubble from './ChatBubble';
import DownloadButton from './DownloadButton';
import Introduce from './Introduce';
import Profile from './Profile';

const BannerWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 700px;
`;

type BannerProps = {
  picture: any;
  chatBubble: string;
  title: string;
  subTitle: string;
  downloadUrl: string;
};

function Banner({ picture, chatBubble, title, subTitle, downloadUrl }: BannerProps) {
  return (
    <BannerWrapper>
      <Profile picture={picture} />
      <ChatBubble>{chatBubble}</ChatBubble>
      <Introduce title={title} subTitle={subTitle} />
      <DownloadButton href={downloadUrl} target="_blank">
        Download CV
      </DownloadButton>
    </BannerWrapper>
  );
}

export default Banner;

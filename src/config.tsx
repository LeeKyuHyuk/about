import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import ContactItem from './types/ContactItem';

type Modal = {
  title: string;
  content: JSX.Element;
};

type Column = {
  size: 'small' | 'middle' | 'large';
  columnColor: string;
  textAlign: 'left' | 'center';
  title?: string;
  titleColor?: string;
  subTitle?: string;
  subTitleColor?: string;
  descriptions?: string[];
  descriptiosColor?: string;
  image?: any;
  modal?: Modal;
};

type Config = {
  initial: string;
  name: string;
  contacts: ContactItem[];
  picture: any;
  chatBubble: string;
  title: string;
  subTitle: string;
  downloadUrl: string;
  introduce: Column[];
  speicalizedItems: any[];
  projects: Column[];
};

const config: Config = {
  initial: 'Kh.',
  name: 'KYUHYUK LEE',
  contacts: [
    { icon: <GithubFilled />, url: 'https://github.com/LeeKyuHyuk' },
    {
      icon: <LinkedinFilled />,
      url: 'https://linkedin.com/in/leekyuhyuk',
    },
    { icon: <MailFilled />, url: 'mailto:lee@kyuhyuk.kr' },
  ],
  picture: 'https://kyuhyuk.kr/about/assets/profile.jpg',
  chatBubble: "Hi, I'm KyuHyuk 👋",
  title: 'Front-End Developer',
  subTitle: 'Creative Programmer',
  downloadUrl: 'https://kyuhyuk.kr/about/assets/KyuHyuk_Lee_CV.pdf',
  introduce: [
    {
      size: 'middle',
      columnColor: '#F5F5F5',
      textAlign: 'left',
      subTitle: 'Front-End Engineer',
      subTitleColor: '#424242',
      descriptions: ['Feb, 2018 - Current', '4 yrs'],
      descriptiosColor: '#424242',
      image: 'https://kyuhyuk.kr/about/assets/SKhynix.png',
      modal: {
        title: 'SKhynix - Technical Leader',
        content: (
          <>
            SK하이닉스에서 React + TypeScript + Electron + GraphQL을 사용하여 자동화 검증 시스템을
            개발했습니다. 단순 개발에 머무르지 않고 UI/UX 설계, 개발, 배포 그리고 실무자들이
            프로그램을 사용하면서 불편함을 느끼는 점이 있는지 직접 현장을 발로 뛰면서 시스템을
            개선했습니다.
            <ul>
              <li>
                NAND Solution - Advanced Test Technology
                <span style={{ opacity: 0.5 }}> (2021.01 ~ 현재)</span>
                <ul>
                  <li>
                    제품 검증을 위해 Sample(SSD, eMMC, UFS)이 장착되어 있는 다수의 장비에 테스트
                    목록을 전달하여 자동으로 검증을 진행하고 결과를 한눈에 쉽게 볼 수 있게 해주는
                    자동화 검증 시스템의 Client(Front-end)을 개발했습니다.
                  </li>
                  <li>React + TypeScript + Electron + GraphQL 사용</li>
                </ul>
              </li>
              <li style={{ marginTop: '8px' }}>
                NAND Solution - Customer Engineering
                <span style={{ opacity: 0.5 }}> (2018.02 ~ 2021.01)</span>
                <ul>
                  <li>
                    고객 제품 인증 및 불량분석 진행 시, 실무자들이 쉽고 빠르게 데이터를 분석 할 수
                    있는 프로그램을 자발적으로 개발하여 TAT를 단축했습니다.
                    <ul>
                      <li>고객 제품 인증 자동화 툴 개발 및 배포</li>
                      <li>UFS Protocol Packet 분석 &amp; Workload 시각화 툴 개발 및 배포</li>
                      <li>Aging Test 자동화 &amp; 분석 툴 개발 및 배포</li>
                      <li>S.M.A.R.T 자동 분석 툴 개발 및 배포</li>
                    </ul>
                  </li>
                  <li>React + JavaScript + Electron 사용</li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
    },
    {
      size: 'small',
      columnColor: '#4051AC',
      textAlign: 'center',
      title: 'Studied at',
      titleColor: '#FFFFFF',
      subTitle: 'Hanyang University',
      subTitleColor: '#FFFFFF',
      descriptions: ['Mar, 2012 - Feb, 2018'],
      descriptiosColor: '#FEFEFE',
    },
    {
      size: 'large',
      columnColor: '#ef4044',
      textAlign: 'left',
      title: 'Award',
      titleColor: '#FFFFFF',
      subTitle: '대한민국 인재상 (대통령상)',
      subTitleColor: '#FFFFFF',
      descriptions: ['Dec, 2011'],
      descriptiosColor: '#FEFEFE',
      modal: {
        title: '대한민국 인재상 (대통령상) 수상',
        content: (
          <>
            대한민국 인재상은 다양한 분야에서 잠재력과 성장 가능성이 있는 우수 인재를 발굴, 격려하고
            바람직한 인재상을 정립하기 위해 수여됩니다. 저사양 또는 출시한지 오래된 스마트폰을
            최적화하는 프로그램을 개발하여 사용자들의 편의 증진에 크게 기여해 2011년 12월에 대한민국
            인재상 (대통령상)을 받았습니다.
          </>
        ),
      },
    },
  ],
  speicalizedItems: [
    'https://kyuhyuk.kr/about/assets/react.png',
    'https://kyuhyuk.kr/about/assets/electron.svg',
    'https://kyuhyuk.kr/about/assets/typescript.svg',
    'https://kyuhyuk.kr/about/assets/graphql.svg',
    'https://kyuhyuk.kr/about/assets/jest.png',
    'https://kyuhyuk.kr/about/assets/styled.png',
  ],
  projects: [
    {
      size: 'small',
      columnColor: '#E8F5E9',
      textAlign: 'center',
      subTitle: 'Android Debloater',
      subTitleColor: '#424242',
      image: 'https://kyuhyuk.kr/about/assets/Android-Debloater.png',
      modal: {
        title: 'Android Debloater',
        content: (
          <>
            <p>
              안드로이드 스마트폰에 있는 원치 않는 애플리케이션과 기본 탑재 애플리케이션을 root 권한
              없이 제거하는 것을 도와주는 프로그램입니다.
              <br />
              React와 Electron을 사용해서 개발했습니다.
            </p>
            GitHub Repository :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none' }}
              href="https://github.com/LeeKyuHyuk/Android-Debloater"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/LeeKyuHyuk/Android-Debloater
            </a>
          </>
        ),
      },
    },
    {
      size: 'small',
      columnColor: '#E1F5FE',
      textAlign: 'center',
      subTitle: 'iHEIC',
      subTitleColor: '#424242',
      image: 'https://kyuhyuk.kr/about/assets/iHEIC.png',
      modal: {
        title: 'iHEIC',
        content: (
          <>
            <p>
              iOS 11부터 JPG가 아닌 HEIC(HEIF) 포맷으로 사진이 저장되기 시작했습니다.
              <br />
              쉽고 간편하게 HEIC를 JPG로 변환하는 프로그램입니다.
              <br />
              React와 Electron을 사용해서 개발했습니다.
            </p>
            iHEIC :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none' }}
              href="https://kyuhyuk.kr/article/ordinary-life/2021/09/05/iHEIC-v1.0.0"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/article/ordinary-life/2021/09/05/iHEIC-v1.0.0
            </a>
            <br />
            iHEIC 개발 후기 :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none' }}
              href="https://kyuhyuk.kr/article/ordinary-life/2021/09/05/iHEIC-Development-Story"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/article/ordinary-life/2021/09/05/iHEIC-Development-Story
            </a>
          </>
        ),
      },
    },
    {
      size: 'small',
      columnColor: '#FFF8E1',
      textAlign: 'center',
      subTitle: 'Wedding Invitation',
      subTitleColor: '#424242',
      image: 'https://kyuhyuk.kr/about/assets/Wedding-Invitation.png',
      modal: {
        title: 'Wedding Invitation',
        content: (
          <>
            <p>
              2021년 가을, 모바일 청첩장 만큼은 직접 만들어서 지인들에게 나눠주고 싶어 짧은 기간
              안에 React를 사용해서 만들었습니다.
            </p>
            모바일 청첩장 페이지 :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none' }}
              href="https://kyuhyuk.kr/wedding-invitation"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/wedding-invitation
            </a>
            <br />
            모바일 청첩장 개발 후기 :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none' }}
              href="https://kyuhyuk.kr/article/ordinary-life/2021/10/01/Wedding-Invitation-Development-Story"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/article/ordinary-life/2021/10/01/Wedding-Invitation-Development-Story
            </a>
            <br />
            GitHub Repository :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none' }}
              href="https://github.com/LeeKyuHyuk/wedding-invitation"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/LeeKyuHyuk/wedding-invitation
            </a>
          </>
        ),
      },
    },
  ],
};

export default config;

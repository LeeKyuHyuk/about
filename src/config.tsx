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
  chatBubble: "Hi, I'm KyuHyuk π",
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
            SKνμ΄λμ€μμ React + TypeScript + Electron + GraphQLμ μ¬μ©νμ¬ μλν κ²μ¦ μμ€νμ
            κ°λ°νμ΅λλ€. λ¨μ κ°λ°μ λ¨Έλ¬΄λ₯΄μ§ μκ³  UI/UX μ€κ³, κ°λ°, λ°°ν¬ κ·Έλ¦¬κ³  μ€λ¬΄μλ€μ΄
            νλ‘κ·Έλ¨μ μ¬μ©νλ©΄μ λΆνΈν¨μ λλΌλ μ μ΄ μλμ§ μ§μ  νμ₯μ λ°λ‘ λ°λ©΄μ μμ€νμ
            κ°μ νμ΅λλ€.
            <ul>
              <li>
                NAND Solution - Advanced Test Technology
                <span style={{ opacity: 0.5 }}> (2021.01 ~ νμ¬)</span>
                <ul>
                  <li>
                    μ ν κ²μ¦μ μν΄ Sample(SSD, eMMC, UFS)μ΄ μ₯μ°©λμ΄ μλ λ€μμ μ₯λΉμ νμ€νΈ
                    λͺ©λ‘μ μ λ¬νμ¬ μλμΌλ‘ κ²μ¦μ μ§ννκ³  κ²°κ³Όλ₯Ό νλμ μ½κ² λ³Ό μ μκ² ν΄μ£Όλ
                    μλν κ²μ¦ μμ€νμ Client(Front-end)μ κ°λ°νμ΅λλ€.
                  </li>
                  <li>React + TypeScript + Electron + GraphQL μ¬μ©</li>
                </ul>
              </li>
              <li style={{ marginTop: '8px' }}>
                NAND Solution - Customer Engineering
                <span style={{ opacity: 0.5 }}> (2018.02 ~ 2021.01)</span>
                <ul>
                  <li>
                    κ³ κ° μ ν μΈμ¦ λ° λΆλλΆμ μ§ν μ, μ€λ¬΄μλ€μ΄ μ½κ³  λΉ λ₯΄κ² λ°μ΄ν°λ₯Ό λΆμ ν  μ
                    μλ νλ‘κ·Έλ¨μ μλ°μ μΌλ‘ κ°λ°νμ¬ TATλ₯Ό λ¨μΆνμ΅λλ€.
                    <ul>
                      <li>κ³ κ° μ ν μΈμ¦ μλν ν΄ κ°λ° λ° λ°°ν¬</li>
                      <li>UFS Protocol Packet λΆμ &amp; Workload μκ°ν ν΄ κ°λ° λ° λ°°ν¬</li>
                      <li>Aging Test μλν &amp; λΆμ ν΄ κ°λ° λ° λ°°ν¬</li>
                      <li>S.M.A.R.T μλ λΆμ ν΄ κ°λ° λ° λ°°ν¬</li>
                    </ul>
                  </li>
                  <li>React + JavaScript + Electron μ¬μ©</li>
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
      subTitle: 'λνλ―Όκ΅­ μΈμ¬μ (λν΅λ Ήμ)',
      subTitleColor: '#FFFFFF',
      descriptions: ['Dec, 2011'],
      descriptiosColor: '#FEFEFE',
      modal: {
        title: 'λνλ―Όκ΅­ μΈμ¬μ (λν΅λ Ήμ) μμ',
        content: (
          <>
            λνλ―Όκ΅­ μΈμ¬μμ λ€μν λΆμΌμμ μ μ¬λ ₯κ³Ό μ±μ₯ κ°λ₯μ±μ΄ μλ μ°μ μΈμ¬λ₯Ό λ°κ΅΄, κ²©λ €νκ³ 
            λ°λμ§ν μΈμ¬μμ μ λ¦½νκΈ° μν΄ μμ¬λ©λλ€. μ μ¬μ λλ μΆμνμ§ μ€λλ μ€λ§νΈν°μ
            μ΅μ ννλ νλ‘κ·Έλ¨μ κ°λ°νμ¬ μ¬μ©μλ€μ νΈμ μ¦μ§μ ν¬κ² κΈ°μ¬ν΄ 2011λ 12μμ λνλ―Όκ΅­
            μΈμ¬μ (λν΅λ Ήμ)μ λ°μμ΅λλ€.
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
              μλλ‘μ΄λ μ€λ§νΈν°μ μλ μμΉ μλ μ νλ¦¬μΌμ΄μκ³Ό κΈ°λ³Έ νμ¬ μ νλ¦¬μΌμ΄μμ root κΆν
              μμ΄ μ κ±°νλ κ²μ λμμ£Όλ νλ‘κ·Έλ¨μλλ€.
              <br />
              Reactμ Electronμ μ¬μ©ν΄μ κ°λ°νμ΅λλ€.
            </p>
            GitHub Repository :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none', wordBreak: 'break-all' }}
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
              iOS 11λΆν° JPGκ° μλ HEIC(HEIF) ν¬λ§·μΌλ‘ μ¬μ§μ΄ μ μ₯λκΈ° μμνμ΅λλ€.
              <br />
              μ½κ³  κ°νΈνκ² HEICλ₯Ό JPGλ‘ λ³ννλ νλ‘κ·Έλ¨μλλ€.
              <br />
              Reactμ Electronμ μ¬μ©ν΄μ κ°λ°νμ΅λλ€.
            </p>
            iHEIC :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none', wordBreak: 'break-all' }}
              href="https://kyuhyuk.kr/article/ordinary-life/2021/09/05/iHEIC-v1.0.0"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/article/ordinary-life/2021/09/05/iHEIC-v1.0.0
            </a>
            <br />
            iHEIC κ°λ° νκΈ° :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none', wordBreak: 'break-all' }}
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
              2021λ κ°μ, λͺ¨λ°μΌ μ²­μ²©μ₯ λ§νΌμ μ§μ  λ§λ€μ΄μ μ§μΈλ€μκ² λλ μ£Όκ³  μΆμ΄ μ§§μ κΈ°κ°
              μμ Reactλ₯Ό μ¬μ©ν΄μ λ§λ€μμ΅λλ€.
            </p>
            λͺ¨λ°μΌ μ²­μ²©μ₯ νμ΄μ§ :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none', wordBreak: 'break-all' }}
              href="https://kyuhyuk.kr/wedding-invitation"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/wedding-invitation
            </a>
            <br />
            λͺ¨λ°μΌ μ²­μ²©μ₯ κ°λ° νκΈ° :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none', wordBreak: 'break-all' }}
              href="https://kyuhyuk.kr/article/ordinary-life/2021/10/01/Wedding-Invitation-Development-Story"
              target="_blank"
              rel="noreferrer"
            >
              https://kyuhyuk.kr/article/ordinary-life/2021/10/01/Wedding-Invitation-Development-Story
            </a>
            <br />
            GitHub Repository :{' '}
            <a
              style={{ color: '#01579B', opacity: 0.85, textDecoration: 'none', wordBreak: 'break-all' }}
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

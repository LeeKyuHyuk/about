import React from 'react';
import Banner from './components/Banner';
import Content from './components/Content';
import Speicalized from './components/Content/Speicalized';
import Footer from './components/Footer';
import Header from './components/Header';
import config from './config';
import Column from './core/Column';
import Grid from './core/Grid';
import Modal from './core/Modal';

function App() {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [modalTitle, setModalTitle] = React.useState<string>('');
  const [modalContent, setModalContent] = React.useState<JSX.Element>(<></>);

  function handleModalOpen(title?: string, content?: JSX.Element) {
    if (title && content) {
      setModalTitle(title);
      setModalContent(content);
      setIsModalVisible(true);
    }
  }

  function handleModalClose() {
    setIsModalVisible(false);
  }

  return (
    <>
      <Header initial={config.initial} name={config.name} contacts={config.contacts} />
      <Banner
        picture={config.picture}
        chatBubble={config.chatBubble}
        title={config.title}
        subTitle={config.subTitle}
        downloadUrl={config.downloadUrl}
      />
      <Content>
        <>
          <Grid>
            {config.introduce.map((item, index) => (
              <Column
                key={index}
                size={item.size}
                columnColor={item.columnColor}
                textAlign={item.textAlign}
                subTitle={item.subTitle}
                subTitleColor={item.subTitleColor}
                descriptions={item.descriptions}
                descriptiosColor={item.descriptiosColor}
                image={item.image}
                onClick={
                  item.modal
                    ? () => handleModalOpen(item.modal?.title, item.modal?.content)
                    : undefined
                }
              />
            ))}
          </Grid>
          <Speicalized images={config.speicalizedItems} />
          <Grid>
            {config.projects.map((item, index) => (
              <Column
                key={index}
                size={item.size}
                columnColor={item.columnColor}
                textAlign={item.textAlign}
                subTitle={item.subTitle}
                subTitleColor={item.subTitleColor}
                descriptions={item.descriptions}
                descriptiosColor={item.descriptiosColor}
                image={item.image}
                onClick={
                  item.modal
                    ? () => handleModalOpen(item.modal?.title, item.modal?.content)
                    : undefined
                }
              />
            ))}
          </Grid>
        </>
      </Content>
      <Footer year="2022" initial={config.initial} name={config.name} />
      <Modal
        title={modalTitle}
        content={modalContent}
        visible={isModalVisible}
        onClose={handleModalClose}
      />
    </>
  );
}

export default App;

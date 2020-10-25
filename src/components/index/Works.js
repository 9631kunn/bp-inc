import React from 'react';
import styled from 'styled-components';

import WorkBox from './WorkBox';
import Heading from '../Heading';

const gapXxl = (props) => props.theme.gap.xxl;

const Wrap = styled.section`
  margin-block-end: ${gapXxl};
`;

const Works = () => {
  const workBoxes = [
    {
      title: 'Sales consulting.',
      subTitle: '営業コンサルティング',
      color: 'red',
      position: 'left',
      link: '',
      description: '新規顧客開拓・人脈紹介・営業組織構築提案・各種商材提供等、格安でお手伝いします。',
    },
    {
      title: 'Business consulting.',
      subTitle: '起業／副業コンサルティング',
      color: 'purple',
      position: 'right',
      link: '',
      description: '会社設立・税務・労務・人材育成等各種相談、セミナー企画・運営等、格安でお手伝いします。',
    },
    {
      title: 'Office Work.',
      subTitle: '事務／業務運営代行',
      color: 'blue',
      position: 'left',
      link: '',
      description: '経理事務・労務管理事務・ホームページ管理・各種WEBサービス管理等、格安でお手伝いします。',
    },
  ];
  return (
    <Wrap>
      <Heading position="right" text="WORKS" />
      {workBoxes.map((box) => (
        <WorkBox key={box.title} {...box} />
      ))}
    </Wrap>
  );
};

export default Works;

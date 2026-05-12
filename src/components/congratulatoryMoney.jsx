import React from "react";
import { Divider, Collapse, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../assets/flower3.png";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
} from "../../config";

const { Panel } = Collapse;

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const AccountRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 12px 2px;
  border-bottom: 1px solid #ece5e1;
  &:last-of-type {
    border-bottom: none;
  }
`;

const Who = styled.div`
  line-height: 1.5;
`;

const Relation = styled.span`
  color: #7a6e65;
  margin-right: 8px;
  font-size: 0.85rem;
`;

const Name = styled.span`
  font-size: 0.95rem;
`;

const Bank = styled.div`
  font-size: 0.85rem;
  color: #4f4843;
`;

const CopyBtn = styled.button`
  border: 1px solid #e0d8d3;
  background: #fff;
  border-radius: 6px;
  padding: 5px 11px;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
  color: var(--title-color);
`;

const groomAccounts = [
  { relation: "혼주", name: GROOM_FATHER_NAME, info: GROOM_FATHER_ACCOUNT_NUMBER },
  { relation: "혼주", name: GROOM_MOTHER_NAME, info: GROOM_MOTHER_ACCOUNT_NUMBER },
  { relation: "신랑", name: GROOM_NAME, info: GROOM_ACCOUNT_NUMBER },
];

const brideAccounts = [
  { relation: "신부", name: BRIDE_NAME, info: BRIDE_ACCOUNT_NUMBER },
];

const numberOnly = (info) => {
  const parts = info.trim().split(" ");
  return parts.length > 1 ? parts.slice(1).join(" ") : info;
};

const AccountPanel = ({ accounts }) => (
  <div>
    {accounts
      .filter((a) => a.info)
      .map((a) => (
        <AccountRow key={a.relation + a.name}>
          <Who>
            <div>
              <Relation>{a.relation}</Relation>
              <Name>{a.name}</Name>
            </div>
            <Bank>{a.info}</Bank>
          </Who>
          <CopyToClipboard text={numberOnly(a.info)}>
            <CopyBtn
              onClick={() => message.success("계좌번호가 복사되었습니다.")}
            >
              <CopyOutlined /> 복사
            </CopyBtn>
          </CopyToClipboard>
        </AccountRow>
      ))}
  </div>
);

const CongratulatoryMoney = () => {
  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>마음 전하실 곳</Title>
      </Divider>
      <Image src={Flower} />
      <Collapse
        data-aos="fade-up"
        accordion
        bordered={false}
        style={{ background: "transparent" }}
      >
        <Panel header={<b>신랑측</b>} key="groom">
          <AccountPanel accounts={groomAccounts} />
        </Panel>
        <Panel header={<b>신부측</b>} key="bride">
          <AccountPanel accounts={brideAccounts} />
        </Panel>
      </Collapse>
    </Wrapper>
  );
};

export default CongratulatoryMoney;

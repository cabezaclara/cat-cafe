import React from "react";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledSection, StyledList, Item } from "./styles";

function StarsList({ stars, level }) {
  return (
    <StyledSection>
      {stars && stars.length ? (
        <>
          <Title level={level}>Наши звезды</Title>
          <StyledList $isGridList>
            {stars.map((star) => (
              <Item key={star.id}>
                <StarCard {...star} />
              </Item>
            ))}
          </StyledList>
          <Button minWidth={353} link={AppRoute.BUY}>
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default StarsList;

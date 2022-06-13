import { Anchor, Container, Group, Image, Text } from '@mantine/core';

import { primaryColor, resourceLinksGitHubLink, textColor } from '../constants';
import Footer from '../components/footer/Footer';
import ScrollToTopArrow from '../components/ScrollToTopArrow';
import SectionTitle from '../components/SectionTitle';

const ResourcesLinks = (): JSX.Element => {
  return (
    <Container style={{ paddingTop: 200 }}>
      <Text style={{ color: primaryColor, fontSize: 60, fontWeight: 700, letterSpacing: 5 }}>
        Resources links 🔗
      </Text>

      <Container style={{ paddingBottom: 90 }}>
        <Text style={{ color: textColor, fontSize: 20, paddingTop: 40, paddingBottom: 40 }}>
          Resources links is an application that allows you to keep all the links of resources that
          you want to look for in the future all in one place.
        </Text>

        <Anchor
          href={resourceLinksGitHubLink}
          target="_blank"
          style={{ color: textColor, fontWeight: 500, paddingBottom: 60 }}
        >
          <Text>VIEW SOURCE CODE &#8250;</Text>
        </Anchor>
      </Container>

      <SectionTitle title="Purpose and goals" />

      <Text style={{ color: textColor, fontSize: 20, paddingBottom: 90 }}>
        I always want that my projects have real impact on my life so they can help me do things
        faster, so with Resources Links what I wanted was to have in one place all the links to the
        resources that I find interesting or that I know that I will need in the future. You can add
        a title, a description and categories so you have all the details of each resource and to be
        able of doing a search and obtain the best result.
      </Text>

      <SectionTitle title="Tech stack and explanation" />

      <Text style={{ color: textColor, fontSize: 20, paddingBottom: 90 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus. Aliquam
        pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet porttitor
        risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus. Pellentesque
        tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui nec nisl
        sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique nec ipsum.
        Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum posuere. Ut metus
        purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
      </Text>

      <SectionTitle title="Problems and thought process" />

      <Text style={{ color: textColor, fontSize: 20, paddingBottom: 90 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus. Aliquam
        pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet porttitor
        risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus. Pellentesque
        tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui nec nisl
        sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique nec ipsum.
        Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum posuere. Ut metus
        purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
      </Text>

      <SectionTitle title="Lessons learned" />

      <Text style={{ color: textColor, fontSize: 20, paddingBottom: 90 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae placerat tellus. Aliquam
        pulvinar, orci sit amet condimentum auctor, leo turpis venenatis lectus, sit amet porttitor
        risus odio sit amet tortor. In eget odio ut est maximus elementum id ac tellus. Pellentesque
        tincidunt nisl ac nulla placerat, at sagittis massa dictum. Morbi gravida dui nec nisl
        sollicitudin iaculis. Maecenas velit quam, finibus vitae lacinia eget, tristique nec ipsum.
        Nulla facilisi. Maecenas at justo eros. Aenean auctor lectus et fermentum posuere. Ut metus
        purus, tempus id nulla at, semper fermentum ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque convallis eu mauris vel feugiat.
      </Text>

      <Footer />
      <ScrollToTopArrow />
    </Container>
  );
};

export default ResourcesLinks;

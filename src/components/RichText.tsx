import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import React from 'react';

const options = {
  renderMark: {
    [MARKS.CODE]: (
      text:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | Iterable<React.ReactNode>,
    ) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (
      node: { content: any[] },
      children:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment,
    ) => {
      if (
        node.content.find((item: { marks: any[] }) =>
          item.marks?.find((mark: { type: string }) => mark.type === 'code'),
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }

      return <p>{children}</p>;
    },

    [INLINES.ENTRY_HYPERLINK]: (node: {
      data: {
        target: {
          sys: { contentType: { sys: { id: string } } };
          fields: {
            slug: any;
            title:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | (string &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (string & React.ReactFragment)
              | (string & React.ReactPortal)
              | (number &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (number & React.ReactFragment)
              | (number & React.ReactPortal)
              | (false &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (false & React.ReactFragment)
              | (false & React.ReactPortal)
              | (true &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (true & React.ReactFragment)
              | (true & React.ReactPortal)
              | (React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                > &
                  string)
              | (React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                > &
                  number)
              | (React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                > &
                  false)
              | (React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                > &
                  true)
              | (React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                > &
                  React.ReactFragment)
              | (React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                > &
                  React.ReactPortal)
              | (React.ReactFragment & string)
              | (React.ReactFragment & number)
              | (React.ReactFragment & false)
              | (React.ReactFragment & true)
              | (React.ReactFragment &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (React.ReactFragment & React.ReactPortal)
              | (React.ReactPortal & string)
              | (React.ReactPortal & number)
              | (React.ReactPortal & false)
              | (React.ReactPortal & true)
              | (React.ReactPortal &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (React.ReactPortal & React.ReactFragment)
              | (Iterable<React.ReactNode> & string)
              | (Iterable<React.ReactNode> & number)
              | (Iterable<React.ReactNode> & false)
              | (Iterable<React.ReactNode> & true)
              | (Iterable<React.ReactNode> &
                  React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >)
              | (Iterable<React.ReactNode> & React.ReactFragment)
              | (Iterable<React.ReactNode> & React.ReactPortal);
          };
        };
      };
    }) => {
      if (node.data.target.sys.contentType.sys.id === 'post') {
        return (
          <Link href={`/posts/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </Link>
        );
      }
    },

    [INLINES.HYPERLINK]: (node: { content: any[]; data: { uri: string } }) => {
      const text = node.content.find(
        (item: { nodeType: string }) => item.nodeType === 'text',
      )?.value;
      return (
        <a href={node.data.uri} target='_blank' rel='noopener noreferrer'>
          {text}
        </a>
      );
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node: {
      data: {
        target: {
          sys: { contentType: { sys: { id: string } } };
          fields: { embedUrl: string; title: string };
        };
      };
    }) => {
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            height='400'
            width='100%'
            src={node.data.target.fields.embedUrl}
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
  },
};

const RichText = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;

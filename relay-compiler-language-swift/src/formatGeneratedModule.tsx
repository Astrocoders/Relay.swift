/** @jsx swiftJSX */

import { FormatModule } from 'relay-compiler';
import { swiftJSX, renderSwift, Fragment } from './swiftJSX';
import { NodeStruct } from './components/NodeStruct';

export function formatGeneratedModule(): FormatModule {
  return ({ node, typeText }) => {
    return renderSwift(
      <Fragment>
        {`// Auto-generated by relay-compiler. Do not edit.
`}
        <import module="Relay" />
        <NodeStruct node={node} typeText={typeText} />
      </Fragment>
    );
  };
}

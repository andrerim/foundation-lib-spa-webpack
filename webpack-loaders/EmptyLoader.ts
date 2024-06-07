import { validate as validateOptions } from 'schema-utils';
import { Schema } from 'schema-utils/declarations/validate';

/**
 * Webpack Empty loader configuration definition
 */
const schema : Schema = {
    type: 'object',
    properties: {
    }
};

/**
 * Webpack loader to emit empty resources, used to ignore SCSS file on Server
 * Side Rendering builds of the Episerver SPA
 * 
 * @param   {string}  source    The source of the resource that must be loaded
 * @returns {string}            An empty string
 */
function EmptyLoader (): string  {
    // getOptions from webpack loader context. Loader API accessible from `this` context provided to it. 
    // See https://webpack.js.org/api/loaders/#the-loader-context
    // @ts-expect-error
    const options = this.getOptions(); 
    
    if (options) {
        validateOptions(schema, options, { name: 'Empty loader'});
    }
    return '';
}
module.exports = EmptyLoader;
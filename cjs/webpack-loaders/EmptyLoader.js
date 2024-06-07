"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_utils_1 = require("schema-utils");
/**
 * Webpack Empty loader configuration definition
 */
const schema = {
    type: 'object',
    properties: {}
};
/**
 * Webpack loader to emit empty resources, used to ignore SCSS file on Server
 * Side Rendering builds of the Episerver SPA
 *
 * @param   {string}  source    The source of the resource that must be loaded
 * @returns {string}            An empty string
 */
function EmptyLoader() {
    // getOptions from webpack loader context. Loader API accessible from `this` context provided to it. 
    // See https://webpack.js.org/api/loaders/#the-loader-context
    // @ts-expect-error
    const options = this.getOptions();
    if (options) {
        (0, schema_utils_1.validate)(schema, options, { name: 'Empty loader' });
    }
    return '';
}
module.exports = EmptyLoader;

function doNothing() {
    return null;
};
require.extensions['.less'] = doNothing;
require.extensions['.jpeg'] = doNothing;
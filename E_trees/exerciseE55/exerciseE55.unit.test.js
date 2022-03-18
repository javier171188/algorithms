'use strict';
const isMirrored = require("./exerciseE55");

describe('Small trees', () => {
    test('Empty tree', () => {
        const emptyTree = {};
        const empty = isMirrored(emptyTree);
        expect(empty).toBe(true);
    })

    test('Tree without values', () => {
        const emptyParsTree = {
            value: null,
            left: null,
            right: null
        };
        const emptyPars = isMirrored(emptyParsTree);
        expect(emptyPars).toBe(true);
    })

    test('Just one value', () => {
        const oneNodeTree = {
            value: 'A'
        };
        const oneNode = isMirrored(oneNodeTree);
        expect(oneNode).toBe(true);

    })

    test('Empty branches', () => {
        const oneNodeTree = {
            value: 'A',
            left: null,
            right: null
        };
        const oneNode = isMirrored(oneNodeTree);
        expect(oneNode).toBe(true);
    })
})

describe('Symmetric trees', () => {
    test('Three nodes', () => {
        const tree = {
            value: 'A',
            left: { value: 'B' },
            right: { value: 'B' }
        }
        const symmetric = isMirrored(tree);
        expect(symmetric).toBe(true);
    })

    test('Example tree', () => {
        const symmetricTree = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 3,
                    left: null,
                    right: null
                },
                right: {
                    value: 4,
                    left: {
                        value: 5,
                        left: {},
                        right: {}
                    },
                    right: null
                }
            },
            right: {
                value: 2,
                left: {
                    value: 4,
                    left: null,
                    right: {
                        value: 5,
                        left: null,
                        right: null
                    }
                },
                right: {
                    value: 3,
                    left: null,
                    right: null
                }
            }
        }

        const symmetric = isMirrored(symmetricTree);
        expect(symmetric).toBe(true);
    })

    test('7 nodes (ABCD)', () => {
        const tree = {
            value: 'A',
            left: {
                value: 'B',
                left: {
                    value: 'C'
                },
                right: {
                    value: 'D'
                }
            },
            right: {
                value: 'B',
                left: {
                    value: 'D'
                },
                right: {
                    value: 'C'
                }
            }
        }

        const symmetric = isMirrored(tree);
        expect(symmetric).toBe(true);
    })

    test('"Big tree" (ABCDEFGH)', () => {
        const tree = {
            value: 'A',
            left: {
                value: 'B',
                left: {
                    value: 'C',
                    left: { value: 'E' },
                    right: { value: 'F' }
                },
                right: {
                    value: 'D',
                    left: { value: 'G' },
                    right: { value: 'H' }
                }
            },
            right: {
                value: 'B',
                left: {
                    value: 'D',
                    left: { value: 'H' },
                    right: { value: 'G' }
                },
                right: {
                    value: 'C',
                    left: { value: 'F' },
                    right: { value: 'E' },
                }
            }
        }
        const symmetric = isMirrored(tree);
        expect(symmetric).toBe(true);
    })


})

describe('No symmetric tree', () => {
    test('Three nodes', () => {
        const tree = {
            value: 'A',
            left: { value: 'B' },
            right: { value: 'C' }
        }
        let symmetric = isMirrored(tree);
        expect(symmetric).toBe(false);
    })

    test('Same values, incorrect order', () => {
        const tree = {
            value: 'A',
            left: {
                value: 'B',
                left: { value: 'C' },
                right: { value: 'D' }
            },
            right: {
                value: 'B',
                left: { value: 'C' },
                right: { value: 'D' }
            }
        }
        const symmetric = isMirrored(tree);
        expect(symmetric).toBe(false);
    })

    test('Difference only on the leaves', () => {
        const tree = {
            value: 'A',
            left: {
                value: 'B',
                left: {
                    value: 'C',
                    left: { value: 'F' },
                    right: { value: 'E' }
                },
                right: {
                    value: 'D',
                    left: { value: 'G' },
                    right: { value: 'H' }
                }
            },
            right: {
                value: 'B',
                left: {
                    value: 'D',
                    left: { value: 'H' },
                    right: { value: 'G' }
                },
                right: {
                    value: 'C',
                    left: { value: 'F' },
                    right: { value: 'E' }
                }
            }
        }

        const symmetric = isMirrored(tree);
        expect(symmetric).toBe(false);
    })

    test('"Big tree"', () => {
        const noSymmetricTree = {
            value: 'A',
            left: {
                value: 'B',
                left: {
                    value: 'D',
                    left: null,
                    right: null
                },
                right: {
                    value: 'E',
                    left: null,
                    right: null
                }
            },
            right: {
                value: 'C',
                left: {
                    value: 'F',
                    left: {
                        value: 'H',
                        left: null,
                        right: null
                    },
                    right: {
                        value: 'I',
                        left: null,
                        right: null
                    }
                },
                right: {
                    value: 'G',
                    left: null,
                    right: {
                        value: 'J',
                        left: null,
                        right: null
                    }
                }
            }
        }

        const noSymmetric = isMirrored(noSymmetricTree);
        expect(noSymmetric).toBe(false);
    })
})

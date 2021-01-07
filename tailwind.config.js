module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'blue-resolute': '#149ED4',
        'blue-resolute-dark': '#0B799E',
        'blue-resolute-icon': '#A7B7C7'
      },
      spacing: {
        '72': '18rem'
      },
      width: {
        'left': '228px',
        'right': '320px'
      },
      fontSize: {
        xxs: '0.7rem'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
}

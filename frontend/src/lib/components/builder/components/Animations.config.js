export const ANIMATION_PRESETS = {
  fade: {
    enter: 'opacity-0',
    enterActive: 'transition-opacity duration-300',
    leave: 'opacity-100',
    leaveActive: 'transition-opacity duration-300'
  },
  slideUp: {
    enter: 'transform translate-y-6 opacity-0',
    enterActive: 'transition-all duration-400 ease-out',
    leave: 'transform translate-y-0 opacity-100',
    leaveActive: 'transition-all duration-300 ease-in'
  },
  scaleIn: {
    enter: 'transform scale-95 opacity-0',
    enterActive: 'transition-all duration-300 ease-out',
    leave: 'transform scale-100 opacity-100',
    leaveActive: 'transition-all duration-200 ease-in'
  }
};

export const COMPONENT_ANIMATIONS = {
  hero: ['fade', 'slideUp', 'scaleIn'],
  features: ['staggerFade', 'gridPop'],
  cta: ['bounce', 'pulse'],
  // ... other component types
}; 
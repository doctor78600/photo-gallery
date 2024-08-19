export const photoReducer = (state, action) => {
    switch (action.type) {
      case 'MOVE_PHOTO':
        const updatedPhotos = [...state];
        const [movedPhoto] = updatedPhotos.splice(action.sourceIndex, 1);
        updatedPhotos.splice(action.targetIndex, 0, movedPhoto);
        return updatedPhotos;
      default:
        return state;
    }
  };
  
  export const movePhoto = (sourceIndex, targetIndex) => ({
    type: 'MOVE_PHOTO',
    sourceIndex,
    targetIndex,
  });
  

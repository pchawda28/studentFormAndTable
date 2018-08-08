export const columnDef = {
    defaultSortColumn: 'name',
    defaultSortOrder: 'asc',
    cols: [
    {
      field: 'name',
      header: 'Name',
      key: 'TEXT_NAME',
      //sortable: 'true',
      style: {
        'width': '215px',
        'word-wrap': 'break-word'
      }
    },
    {
      field: 'rollNumber',
      header: 'Roll Number',
      key: 'TEXT_DISPLAY_NAME',
      sortable: 'true',
      style: {
        'width': '215px',
        'word-wrap': 'break-word'
        }
    },
    {
      field: 'description',
      header: 'Description',
      key: 'TEXT_DESCRIPTION',
      sortable: 'true',
      style: {
        'width': '215px',
        'word-wrap': 'break-word'
        }
    },
   
    
  ],
  };
  
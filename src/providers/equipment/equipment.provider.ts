import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EquipmentProvider {
  items: any;

  constructor(public http: HttpClient) {
    this.items = [
      { idArticuloBarra: 'U64646M7J205299',
        cliente: 'CLOUDGAIA S.R.L.',
        nombreModelo: 'MULTI.C.BROTHER MFCL 8900 CDW'
      },
      { idArticuloBarra: 'U64219J7N794262',
        cliente: 'DISTRIBUIDORA INTERELEC S A',
        nombreModelo: ''
      },
      { idArticuloBarra: '70165phh07yy3',
        cliente: 'CLOUDGAIA S.R.L.',
        nombreModelo: 'IMP.BROTHER HL-L5100D'
      },
      { idArticuloBarra: '70165PHH07YXG',
        cliente: 'IGUATEMI S.A.',
        nombreModelo: 'MULT.LEXMARK XM3150'
      },
      { idArticuloBarra: '75646050102KB',
        cliente: 'CLOUDGAIA S.R.L.',
        nombreModelo: ''
      },
      { idArticuloBarra: 'U64646M7J205255',
        cliente: 'IGUATEMI S.A.',
        nombreModelo: 'MULT.LEXMARK XM3150'
      }
    ]
  }

  filterClients(searchTerm){
    return this.items.filter((item) => {
        return item.cliente.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  

  filterModel(searchTerm) {
    return this.items.filter((item) => {
        return item.nombreModelo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
}

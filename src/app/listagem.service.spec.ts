import { TestBed } from '@angular/core/testing';

import { ListagemService } from './listagem.service';

describe('ListagemService', () => {
  let service: ListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { Albums\AlbumService } from './albums\album.service';

describe('Albums\AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Albums\AlbumService]
    });
  });

  it('should be created', inject([Albums\AlbumService], (service: Albums\AlbumService) => {
    expect(service).toBeTruthy();
  }));
});

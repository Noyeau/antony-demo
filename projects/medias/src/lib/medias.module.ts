import { NgModule } from '@angular/core';
import { MediasComponent } from './medias.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './components/display/display.component';
import { CommonModule } from '@angular/common';
import { MediasListComponent } from './components/medias-list/medias-list.component';
import { MediasUploadComponent } from './components/medias-upload/medias-upload.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MediasSpaceComponent } from './components/medias-space/medias-space.component';
import { FileSizePipe } from './pipe/file-size.pipe';


const components=[
  MediasComponent,
  DisplayComponent,
  MediasListComponent,
  MediasUploadComponent,
  LoaderComponent,
  MediasSpaceComponent
]

const pipes=[
  FileSizePipe
]


@NgModule({
  declarations: [components, pipes],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [components]
})
export class MediasModule { }

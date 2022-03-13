import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { saveAs } from 'file-saver';
import { Image } from '../../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public imageId!: string;
  public image: Image | undefined;

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageId = this.route.snapshot.params['id'];

    if(this.imageId){
      this.imageService.getImageById(this.imageId).subscribe(data => {
        if(data){        
          this.image = data;
        }
      });
    }
  }

  download() : void{
    const fileName = Date.now() + '-image.png';
    fetch(this.image!.download_url).then((res) => {
      return res.blob();
    }).then((blob) => {
      saveAs(blob, fileName);
    })
  }
}

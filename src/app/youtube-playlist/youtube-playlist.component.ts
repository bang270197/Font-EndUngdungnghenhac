import { Component, OnInit } from '@angular/core';
import {YoutubeServiceService} from '../youtube-service.service';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(private youtubeService: YoutubeServiceService) { }

  ngOnInit() {
  }

}

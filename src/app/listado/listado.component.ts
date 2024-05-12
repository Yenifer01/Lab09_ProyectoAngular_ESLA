import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListadoComponent {
  fotos = [
    {
      titulo: 'Machu Picchu, Cusco',
      descripcion: 'El Santuario Histórico de Machu Picchu es el destino turístico más visitado de Perú y de América.',
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/f2/64/89.jpg'
    },
    {
      titulo: 'Valle del Colca, Arequipa',
      descripcion: 'El Valle del Colca es un extenso valle de tierras fértiles que bordea el río Colca.',
      url: 'https://www.shutterstock.com/image-photo/tourists-cruz-del-condor-viewpoint-600nw-422413168.jpg'
    },

    {
      titulo: 'Choquequirao, Cusco',
      descripcion: 'El Parque Arqueológico de Choquequirao es otro de los mejores destinos turísticos de Perú.',
      url: 'https://usil-blog.s3.amazonaws.com/PROD/blog/image/choquequirao-maravilla-mundo.jpg'
    },
    {
      titulo: 'Líneas de Nazca, Ica',
      descripcion: 'Las Líneas de Nazca son un grupo de antiguos geoglifos grabados en la arena del desierto.',
      url: 'https://www.turiweb.pe/wp-content/uploads/2021/07/nasca2-200721.jpg'
    },
    {
      titulo: 'Kuelap, Amazonas',
      descripcion: 'Es una ciudadela pre inca amurallada con bloques de piedras.',
      url: 'https://elperuano.pe/fotografia/thumbnail/2023/08/20/000261909M.jpg'
    },
    {
      titulo: 'Caral, Lima',
      descripcion: 'El sitio arqueológico de Caral es considerado la ciudad más antigua de Perú.',
      url: 'https://elperuano.pe/fotografia//thumbnail/2021/06/04/000119278M.jpg'
    },
    {
      titulo: 'Lago Titicaca, Puno',
      descripcion: 'El lago Titicaca es el lago navegable más alto del mundo.',
      url: 'https://www.wamanadventures.com/blog/wp-content/uploads/2020/05/uros-600x400.jpg'
    },
    {
      titulo: 'Montaña de Colores, Cusco',
      descripcion: 'La Montaña Sagrada de Vinicunca o Montaña 7 Colores es otro lugar turístico más visitado de Perú.',
      url: 'https://www.tourvinicuncaperu.com/wp-content/uploads/2018/04/monta%C3%B1a-de-los-7-colores.jpg'
    },
    {
      titulo: 'Chavín de Huántar, Ancash',
      descripcion: 'El sitio arqueológico de Chavín está ubicado en el distrito Chavín de Huántar, provincia de Huari.',
      url: 'https://www.shutterstock.com/image-photo/exterior-chavin-de-temple-sunny-600nw-1667378758.jpg'
    }

  ];
}
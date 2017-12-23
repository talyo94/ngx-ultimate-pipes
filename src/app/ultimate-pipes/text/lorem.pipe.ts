import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lorem'
})
export class LoremPipe implements PipeTransform {
  text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet massa eros, ut condimentum sem tempus a. Ut et quam quis ipsum egestas mattis venenatis nec dolor. Aliquam nisi sem, efficitur vitae ultrices id, placerat at erat. Curabitur gravida augue tortor, ut consequat augue varius sed. Etiam nec vehicula nisl. Donec dui ipsum, mattis at interdum cursus, facilisis ac nulla. Phasellus fermentum nunc elit, nec egestas diam vestibulum sit amet. Nam placerat id enim ac consequat. Morbi egestas urna ut tellus semper elementum. Fusce in arcu velit. Donec ullamcorper dapibus turpis vel sollicitudin. Mauris tempor magna enim, vel commodo sem pulvinar nec. Sed at bibendum sapien. Ut placerat efficitur enim nec pharetra. Quisque sit amet viverra quam.
`;

  transform(len: number, type: string = 'paragraphs'): string {
    let lorem = '';

    switch (type) {
      case 'words':
      case 'w':
        const words = this.text.split(' ');
        for (let i = 0; i < len; i++) {
          lorem += words[Math.floor(Math.random() * words.length)] + ' ';
        }
        return lorem.replace('.', '').replace(',', '');

      case 'sentences':
      case 's':
        const sentences = this.text.split('.');
        for (let i = 0; i < len; i++) {
          lorem += sentences[Math.floor(Math.random() * sentences.length)] + '.';
        }
        return lorem;

      case 'paragraphs':
      case 'p':
      default:
        for (let i = 0; i < len; i++) {
          lorem += this.text + "\n";
        }
        return lorem;
    }
  }
}

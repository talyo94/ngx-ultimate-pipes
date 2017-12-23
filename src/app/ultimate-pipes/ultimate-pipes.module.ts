import { NgModule } from '@angular/core';

// arrays
import { EmptyPipe } from './arrays/empty.pipe';
import { FilterPipe } from './arrays/filter.pipe';
import { JoinPipe } from './arrays/join.pipe';
import { ReverseElementsPipe } from './arrays/reverse-elements.pipe';
import { TallyPipe } from './arrays/tally.pipe';

// boolean
import { YesNoPipe } from './boolean/yesno.pipe';

// general
import { DefaultPipe } from './general/default.pipe';
import { DefaultIfFalsePipe } from './general/default-if-false.pipe';
import { FirstPipe } from './general/first.pipe';
import { LastPipe } from './general/last.pipe'

// numbers
import { CeilPipe } from './numbers/ceil.pipe';
import { FloorPipe } from './numbers/floor.pipe';
import { RandomPipe } from './numbers/random.pipe';
import { RoundPipe } from './numbers/round.pipe';

// text
import { CapfirstPipe } from './text/capfirst.pipe';
import { CountPipe } from './text/count.pipe';
import { CutPipe } from './text/cut.pipe';
import { LoremPipe } from './text/lorem.pipe';
import { LowerPipe } from './text/lower.pipe';
import { ReversePipe } from './text/reverse.pipe';
import { ReverseWordsPipe } from './text/reverse-words.pipe';
import { SlugifyPipe } from './text/slugify.pipe';
import { TruncateCharsPipe } from './text/truncate-chars.pipe';
import { TitlePipe } from './text/title.pipe';
import { TruncateWordsPipe } from './text/truncate-words.pipe';
import { UpperPipe } from './text/upper.pipe';

// time
import { NowPipe } from './time/now.pipe';
import { TimesincePipe } from './time/timesince.pipe';
import { TimeuntilPipe } from './time/timeuntil.pipe';


@NgModule({
  declarations: [
    EmptyPipe,
    FilterPipe,
    JoinPipe,
    ReverseElementsPipe,
    TallyPipe,
    YesNoPipe,
    DefaultPipe,
    DefaultIfFalsePipe,
    FirstPipe,
    LastPipe,
    CeilPipe,
    FloorPipe,
    RandomPipe,
    RoundPipe,
    CapfirstPipe,
    CountPipe,
    CutPipe,
    LoremPipe,
    LowerPipe,
    ReversePipe,
    ReverseWordsPipe,
    SlugifyPipe,
    TruncateCharsPipe,
    TitlePipe,
    TruncateWordsPipe,
    UpperPipe,
    NowPipe,
    TimesincePipe,
    TimeuntilPipe
  ],
  exports: [
    EmptyPipe,
    FilterPipe,
    JoinPipe,
    ReverseElementsPipe,
    TallyPipe,
    YesNoPipe,
    DefaultPipe,
    DefaultIfFalsePipe,
    FirstPipe,
    LastPipe,
    CeilPipe,
    FloorPipe,
    RandomPipe,
    RoundPipe,
    CapfirstPipe,
    CountPipe,
    CutPipe,
    LoremPipe,
    LowerPipe,
    ReversePipe,
    ReverseWordsPipe,
    SlugifyPipe,
    TruncateCharsPipe,
    TitlePipe,
    TruncateWordsPipe,
    UpperPipe,
    NowPipe,
    TimesincePipe,
    TimeuntilPipe
  ]
})
export class UltimatePipesModule {
}

import { NgModule } from '@angular/core';
import { TimesincePipe } from './time/timesince.pipe';
import { TruncateCharsPipe } from './text/truncate-chars.pipe';
import { TitlePipe } from './text/title.pipe';
import { TruncateWordsPipe } from './text/truncate-words.pipe';
import { UpperPipe } from './text/upper.pipe';
import { LowerPipe } from './text/lower.pipe';
import { CountPipe } from './text/count.pipe';
import { YesNoPipe } from './boolean/yesno.pipe';
import { DefaultPipe } from './general/default.pipe';
import { DefaultIfFalsePipe } from './general/default-if-false.pipe';
import { EmptyPipe } from './arrays/empty.pipe';
import { NowPipe } from './time/now.pipe';
import { ReversePipe } from './text/reverse.pipe';
import { ReverseWordsPipe } from './text/reverse-words.pipe';
import { CutPipe } from './text/cut.pipe';
import { SlugifyPipe } from './text/slugify.pipe';
import { JoinPipe } from './arrays/join.pipe';
import { LastPipe } from './general/last.pipe';
import { FirstPipe } from './general/first.pipe';
import { FilterPipe } from './arrays/filter.pipe';
import { TallyPipe } from './arrays/tally.pipe';

@NgModule({
  declarations: [
    TruncateCharsPipe,
    TimesincePipe,
    TitlePipe,
    TruncateWordsPipe,
    UpperPipe,
    LowerPipe,
    CountPipe,
    YesNoPipe,
    DefaultPipe,
    DefaultIfFalsePipe,
    EmptyPipe,
    NowPipe,
    ReversePipe,
    ReverseWordsPipe,
    CutPipe,
    SlugifyPipe,
    JoinPipe,
    LastPipe,
    FirstPipe,
    FilterPipe,
    TallyPipe
  ],
  exports: [
    TruncateCharsPipe,
    TimesincePipe,
    TitlePipe,
    TruncateWordsPipe,
    UpperPipe,
    LowerPipe,
    CountPipe,
    YesNoPipe,
    DefaultPipe,
    DefaultIfFalsePipe,
    EmptyPipe,
    NowPipe,
    ReversePipe,
    ReverseWordsPipe,
    CutPipe,
    SlugifyPipe,
    JoinPipe,
    LastPipe,
    FirstPipe,
    FilterPipe
  ]
})
export class UltimatePipesModule {
}

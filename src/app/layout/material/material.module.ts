import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        MatBadgeModule,
        MatSelectModule,
        MatTabsModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatDialogModule,
        MatBadgeModule,
        MatSelectModule,
        MatTabsModule,
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {
}

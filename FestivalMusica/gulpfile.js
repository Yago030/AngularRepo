import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function js(done){
    src('src/js/app.js')
    .pipe(dest('dist/js'))
    done()
}


export function css(done) {
    src('src/scss/app.scss', {sourcemaps : true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css',{sourcemaps : true}));  // Corrección: Cambiado dist/css a 'dist/css'

    done();
}

export function dev() {
    watch('src/scss/js/**/*.js', js);
}



export default series(js, css, dev)
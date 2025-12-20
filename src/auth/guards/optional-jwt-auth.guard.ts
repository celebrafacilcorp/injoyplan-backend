import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Attempts to authenticate using JWT if an Authorization header is present.
 * If the token is missing/invalid, it does NOT throw — it simply leaves req.user undefined.
 */
@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  // Override default behavior which throws when user is missing.
  handleRequest(err: any, user: any) {
    if (err) return null;
    return user ?? null;
  }
}
